create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  duration text not null,
  students integer not null default 0,
  rating numeric(3,2) not null default 0,
  price text not null,
  image_url text not null,
  tags text[] not null default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);