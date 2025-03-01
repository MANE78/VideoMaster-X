create table enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  course_id uuid references courses(id) on delete cascade not null,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text check (status in ('active', 'completed', 'dropped')) default 'active' not null,
  progress integer default 0 not null check (progress >= 0 and progress <= 100),
  unique(user_id, course_id)
);