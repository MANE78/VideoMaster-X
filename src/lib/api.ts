import { supabase } from "./supabase";
import { Course } from "../types/course";

export async function getCourses(): Promise<Course[]> {
  if (!supabase) {
    console.warn("Supabase client not initialized. Using mock data.");
    return getMockCourses();
  }

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    return getMockCourses();
  }

  return data || [];
}

export async function enrollInCourse(courseId: string): Promise<boolean> {
  if (!supabase) {
    console.warn("Supabase client not initialized");
    return false;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase.from("enrollments").insert([
    {
      user_id: user.id,
      course_id: courseId,
    },
  ]);

  if (error) {
    if (error.code === "23505") {
      // Unique violation
      throw new Error("You are already enrolled in this course");
    }
    throw error;
  }

  return true;
}

export async function isEnrolled(courseId: string): Promise<boolean> {
  if (!supabase) {
    console.warn("Supabase client not initialized");
    return false;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data, error } = await supabase
    .from("enrollments")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_id", courseId)
    .single();

  if (error && error.code !== "PGRST116") {
    // PGRST116 is no rows returned
    console.error("Error checking enrollment:", error);
  }

  return !!data;
}

function getMockCourses(): Course[] {
  return [
    {
      id: "1",
      title: "Introduction to Web Development",
      description:
        "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
      duration: "8 weeks",
      students: 1234,
      rating: 4.8,
      price: "$99.99",
      image_url:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
      tags: ["Web Development", "Beginner", "Coding"],
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      description:
        "Master advanced React concepts and patterns for building scalable applications.",
      duration: "6 weeks",
      students: 856,
      rating: 4.9,
      price: "$149.99",
      image_url:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
      tags: ["React", "Advanced", "JavaScript"],
      created_at: new Date().toISOString(),
    },
  ];
}
