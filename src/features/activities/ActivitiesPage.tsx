import { NavLink, Outlet } from "react-router-dom";
import {
  CheckSquare,
  Trophy,
  Calendar,
  TrendingUp,
  Music,
  Wrench,
} from "lucide-react";

const activitySections = [
  {
    id: "todo",
    title: "할 일 목록",
    description: "오늘의 덕질 체크",
    icon: CheckSquare,
    path: "todo",
  },
  {
    id: "voting",
    title: "투표 · Hype",
    description: "화력 지원 하러가기",
    icon: Trophy,
    path: "voting",
  },
  {
    id: "events",
    title: "이벤트",
    description: "진행 중인 이벤트",
    icon: Calendar,
    path: "events",
  },
  {
    id: "trending",
    title: "트렌딩 툴",
    description: "실시간 인기 급상승",
    icon: TrendingUp,
    path: "trending",
  },
  {
    id: "streaming",
    title: "음원 스밍",
    description: "스트리밍 가이드",
    icon: Music,
    path: "streaming",
  },
  {
    id: "youtubeFix",
    title: "YouTube Fix",
    description: "프리미엄 기능 복구",
    icon: Wrench,
    path: "youtube-fix",
  },
];

export function ActivitiesPage() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 space-y-6 pb-20 max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {activitySections.map((section) => {
            const Icon = section.icon;

            return (
              <NavLink
                key={section.id}
                to={`/activities/${section.path}`}
                className={({ isActive }) => `
                  group relative overflow-hidden
                  p-4 rounded-2xl flex flex-col text-left
                  transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white border-pink-300 ring-1 ring-pink-200 shadow-xl scale-[1.02]"
                      : "bg-white/70 border-transparent hover:bg-white hover:shadow-lg hover:scale-[1.01]"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* 오른쪽 위 연한 blur */}
                    {isActive && (
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-2xl opacity-60" />
                    )}

                    {/* 아이콘 컨테이너 */}
                    <div
                      className={`
                        relative z-10 mb-3
                        w-12 h-12 rounded-xl
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:scale-110
                        ${
                          isActive
                            ? "bg-gradient-to-br from-pink-500 to-rose-500 shadow-md"
                            : "bg-white shadow-sm group-hover:bg-pink-50"
                        }
                      `}
                    >
                      <Icon
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-pink-500"
                          }
                        `}
                      />
                    </div>

                    {/* 텍스트 */}
                    <div className="relative z-10 mt-auto">
                      <div
                        className={`font-bold text-sm md:text-base transition-colors ${
                          isActive ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {section.title}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-500 truncate">
                        {section.description}
                      </div>
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 min-h-[400px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
