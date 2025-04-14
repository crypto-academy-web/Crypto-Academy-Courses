import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Course } from '@/lib/constants/courses'; // import your Course type

interface CourseStore {
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course) => void;
  clearSelectedCourse: () => void;
}

export const useCourseStore = create<CourseStore>()(
  persist(
    (set) => ({
      selectedCourse: null,
      setSelectedCourse: (course) => set({ selectedCourse: course }),
      clearSelectedCourse: () => set({ selectedCourse: null }),
    }),
    {
      name: 'selected-course-storage', // Storage key
    }
  )
);
