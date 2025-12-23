import { NavLink, Outlet } from "react-router-dom";
import {
  Calendar,
  FileText,
  Twitter,
  Radio,
  Music,
  Youtube,
} from "lucide-react";

const newsSections = [
  { id: "schedule", title: "일정 · D-DAY", description: "스텔라이브 전체 일정", icon: Calendar, path: "schedule" },
  { id: "broadcast", title: "방송 현황", description: "멤버별 생방송 확인", icon: Radio, path: "broadcast" },
  { id: "cafe", title: "팬카페 공지", description: "공식 카페 새 소식", icon: FileText, path: "cafe" },
  { id: "twitter", title: "X (트위터)", description: "실시간 타임라인", icon: Twitter, path: "twitter" },
  { id: "videos", title: "YouTube", description: "최신 업로드 영상", icon: Youtube, path: "videos" },
  { id: "songs", title: "최근 노래", description: "커버곡 & 오리지널", icon: Music, path: "songs" },
];

export function NewsPage() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 space-y-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {newsSections.map((section) => {
            const Icon = section.icon;

            return (
              <NavLink
                key={section.id}
                to={`/news/${section.path}`}
                className={({ isActive }) => `
                  group relative overflow-hidden
                  p-4 rounded-2xl flex flex-col text-left
                  transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white shadow-xl scale-[1.02] border-blue-400 ring-1 ring-blue-400" // [변경] ring 유틸리티 사용으로 인라인 스타일 제거
                      : "bg-white/70 border-transparent hover:bg-blue-50 hover:shadow-lg hover:scale-[1.01]"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* 우상단 빛 효과 (Active 상태 + Hover 상태) */}
                    <div
                      className={`
                        absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl 
                        transition-opacity duration-300 pointer-events-none
                        bg-gradient-to-br from-blue-200 to-cyan-400 
                        ${
                          isActive
                            ? "opacity-60"
                            : "opacity-0 group-hover:opacity-40"
                        } 
                      `}
                      // [변경] style={{ background: ... }} 제거하고 위쪽에 Tailwind class (bg-gradient-to-br) 적용
                    />

                    {/* 아이콘 컨테이너 */}
                    <div
                      className={`
                        relative z-10 mb-3 w-12 h-12 rounded-xl flex items-center justify-center 
                        transition-all duration-300 group-hover:scale-110
                        ${
                          isActive
                            // [변경] hex 코드와 var() 제거 -> from-blue-500 to-cyan-500 사용
                            ? "bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md"
                            : "bg-white shadow-sm group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-500"
                        }
                      `}
                    >
                      <Icon
                        strokeWidth={2}
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${
                            isActive
                              ? "stroke-white" // Active: 흰색
                              : "stroke-gray-400 group-hover:stroke-white" // 평소: 회색 -> Hover: 흰색
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
                            : "text-gray-600 group-hover:text-gray-900"
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
