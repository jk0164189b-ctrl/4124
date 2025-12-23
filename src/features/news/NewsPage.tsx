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
                      ? "bg-white shadow-xl scale-[1.02]"
                      : "bg-white/70 border-transparent hover:bg-white hover:shadow-lg hover:scale-[1.01]"
                  }
                `}
                style={({ isActive }) =>
                  isActive
                    ? {
                        borderColor: "#60a5fa", // blue-400
                        boxShadow:
                          "0 0 0 1px #93c5fd, 0 12px 24px rgba(0,0,0,0.08)",
                      }
                    : undefined
                }
              >
                {({ isActive }) => (

                  <>
                    {/* 우상단 blur (active only) */}
                    {isActive && (
                      <div
                        className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-60"
                        style={{
                          background:
                            "linear-gradient(135deg, #bfdbfe, #67e8f9)", // blue-200 → cyan-200
                        }}
                      />
                    )}
                    {/* 아이콘 */}
                    <div
                      className="relative z-10 mb-3 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={
                        isActive
                          ? {
                              background:
                                "linear-gradient(135deg, #3b82f6, #06b6d4)", // blue-500 → cyan-500
                              boxShadow: "0 4px 12px rgba(59,130,246,0.35)",
                            }
                          : {
                              background: "#ffffff",
                              boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
                            }
                      }
                    >
                      <Icon
                        className="w-6 h-6 transition-colors duration-300"
                        stroke={isActive ? "#ffffff" : "#3b82f6"} // 🔴 핵심
                      />
                    </div>
                    {/* 텍스트 */}
                    <div className="relative z-10 mt-auto">
                      <div
                        className={`font-bold text-sm md:text-base ${
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
