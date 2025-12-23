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
  { id: "todo", title: "할 일 목록", description: "오늘의 덕질 체크", icon: CheckSquare, path: "todo" },
  { id: "voting", title: "투표 · Hype", description: "화력 지원 하러가기", icon: Trophy, path: "voting" },
  { id: "events", title: "이벤트", description: "진행 중인 이벤트", icon: Calendar, path: "events" },
  { id: "trending", title: "트렌딩 툴", description: "실시간 인기 급상승", icon: TrendingUp, path: "trending" },
  { id: "streaming", title: "음원 스밍", description: "스트리밍 가이드", icon: Music, path: "streaming" },
  { id: "youtubeFix", title: "YouTube Fix", description: "프리미엄 기능 복구", icon: Wrench, path: "youtube-fix" },
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
                      ? "bg-white shadow-xl scale-[1.02] border-theme-pink" // 커스텀 Pink 테두리
                      : "bg-white/70 border-transparent hover:bg-theme-pink-soft hover:shadow-lg hover:scale-[1.01]" // 커스텀 배경 (Soft Pink)
                  }
                `}
                style={({ isActive }) =>
                  isActive
                    ? {
                        // Tailwind 클래스로 한계가 있는 그림자 색상은 style 유지 (Hex 코드 사용)
                        boxShadow: "0 0 0 1px #f472b6, 0 12px 24px rgba(0,0,0,0.08)",
                      }
                    : undefined
                }
              >
                {({ isActive }) => (
                  <>
                    {/* 우상단 빛 효과 */}
                    <div
                      className={`
                        absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl 
                        transition-opacity duration-300 pointer-events-none
                        bg-gradient-to-br from-theme-pink-soft to-theme-rose
                        ${isActive ? "opacity-60" : "opacity-0 group-hover:opacity-40"} 
                      `}
                    />

                    {/* 아이콘 컨테이너 (Pink -> Rose 그라데이션) */}
                    <div
                      className={`
                        relative z-10 mb-3 w-12 h-12 rounded-xl flex items-center justify-center 
                        transition-all duration-300 group-hover:scale-110
                        ${
                          isActive
                            ? "bg-gradient-to-br from-theme-pink to-theme-rose shadow-md"
                            : "bg-white shadow-sm group-hover:bg-gradient-to-br group-hover:from-theme-pink group-hover:to-theme-rose"
                        }
                      `}
                    >
                      {/* 아이콘: stroke="currentColor" + text-theme-pink 사용 */}
                      <Icon
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${
                            isActive
                              ? "text-white" // Active: 흰색
                              : "text-theme-pink group-hover:text-white" // 평소: Theme Pink -> Hover: 흰색
                          }
                        `}
                      />
                    </div>

                    {/* 텍스트 */}
                    <div className="relative z-10 mt-auto">
                      <div
                        className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                          isActive
                            ? "text-gray-900"
                            : "text-gray-700 group-hover:text-gray-900"
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
