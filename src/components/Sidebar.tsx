import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  show: boolean;
}

export function Sidebar(props: SidebarProps) {
  const { data } = useGetLessonsQuery();

  return (
    <aside
      className={`z-[100] fixed top-[75px] bottom-0 right-0 lg:top-0 lg:relative w-[348px] bg-gray-700 p-6 border-l border-gray-600 ${
        !props.show ? "max-w-0 overflow-hidden p-0" : ""
      }`}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
