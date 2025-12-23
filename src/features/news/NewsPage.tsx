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
  {
    id: "schedule",
    title: "일정 · D-DAY",
    description: "스텔라이브 전체 일정",
    icon: Calendar,
    path: "schedule",
  },
  {
    id: "broadcast",
    title: "방송 현황",
    description: "멤버별 생방송 확인",
    icon: Radio,
    path: "broadcast",
  },
  {
    id: "cafe",
    title: "팬카페 공지",
    description: "공식 카페 새 소식",
    icon: FileText,
    path: "cafe",
  },
  {
    id: "twitter",
    title: "X (트위터)",
    description: "실시간 타임라인",
    icon: Twitter,
    path: "twitter",
  },
  {
    id: "videos",
    title: "YouTube",
    description: "최신 업로드 영상",
    icon: Youtube,
    path: "videos",
  },
  {
    id: "songs",
    title: "최근 노래",
    description: "커버곡 & 오리지널",
    icon: Music,
    path: "songs",
  },
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
                      ? "bg-white shadow-xl scale-[1.02] border-[#60a5fa]"
                      : "bg-white/70 border-transparent hover:bg-white hover:shadow-lg hover:scale-[1.01]"
                  }
                `}
                style={({ isActive }) =>
                  isActive
                    ? {
                        // 클릭되었을 때 파란색 테두리와 그림자 (Hex 코드 사용)
                        boxShadow:
                          "0 0 0 1px #60a5fa, 0 12px 24px rgba(0,0,0,0.08)",
                      }
                    : undefined
                }
              >
                {({ isActive }) => (
                  <>
                    {/* 우상단 빛 효과 (Active 상태 + Hover 상태 모두 적용) */}
                    <div
                      className={`
                        absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl 
                        transition-opacity duration-300 pointer-events-none
                        ${
                          isActive
                            ? "opacity-60" // 클릭됨: 진하게
                            : "opacity-0 group-hover:opacity-40" // 호버: 은은하게
                        } 
                      `}
                      style={{
                        background:
                          "linear-gradient(135deg, #bfdbfe, #67e8f9)", // blue-200 -> cyan-200
                      }}
                    />

                    {/* 아이콘 컨테이너 */}
                    <div
                      className={`
                        relative z-10 mb-3 w-12 h-12 rounded-xl flex items-center justify-center 
                        transition-all duration-300 group-hover:scale-110
                        ${
                          isActive
                            ? "bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] shadow-[0_4px_12px_rgba(59,130,246,0.35)]" // Active: 파란 그라데이션
                            : "bg-white shadow-sm group-hover:bg-gradient-to-br group-hover:from-[#3b82f6] group-hover:to-[#06b6d4]" // Hover: 파란 그라데이션
                        }
                      `}
                    >
                      {/* 아이콘 */}
                      <Icon
                        strokeWidth={2}
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${
                            isActive
                              ? "stroke-white" // 클릭됨: 흰색
                              : "stroke-[#3b82f6] group-hover:stroke-white" // 평소: 파랑(#3b82f6) -> 호버: 흰색
                          }
                        `}
                      />
                    </div>

                    {/* 텍스트 라벨 */}
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
