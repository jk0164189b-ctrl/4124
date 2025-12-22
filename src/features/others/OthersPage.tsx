import { NavLink, Outlet } from "react-router-dom";
import {
  Image,
  Search,
  Gamepad,
  BarChart,
  Video,
  Star,
} from "lucide-react";

const otherSections = [
  {
    id: "fanArt",
    title: "팬아트",
    description: "쇼츠처럼 보는 아카이브",
    icon: Image,
    path: "fanArt",
  },
  {
    id: "karaoke",
    title: "노래방",
    description: "곡별 노래방 번호 찾기",
    icon: Search,
    path: "karaoke",
  },
  {
    id: "games",
    title: "팬게임",
    description: "팬 제작 게임 모음",
    icon: Gamepad,
    path: "games",
  },
  {
    id: "stats",
    title: "팬덤 통계",
    description: "활동 데이터 분석",
    icon: BarChart,
    path: "stats",
  },
  {
    id: "kirinuki",
    title: "키리누키",
    description: "클립 영상 랭킹",
    icon: Video,
    path: "kirinuki",
  },
  {
    id: "fortune",
    title: "오늘의 운세",
    description: "재미로 보는 운세",
    icon: Star,
    path: "fortune",
  },
];

export function OthersPage() {
  return (
    <div className="h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 space-y-6 pb-20 max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {otherSections.map((section) => {
            const Icon = section.icon;

            return (
              <NavLink
                key={section.id}
                to={`/others/${section.path}`}
                className={({ isActive }) => `
                  group relative overflow-hidden
                  p-4 rounded-2xl flex flex-col text-left
                  transition-all duration-300 cursor-pointer border
                  ${
                    isActive
                      ? "bg-white border-emerald-300 ring-1 ring-emerald-200 shadow-xl scale-[1.02]"
                      : "bg-white/70 border-transparent hover:bg-white hover:shadow-lg hover:scale-[1.01]"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* 오른쪽 위 연한 blur */}
                    {isActive && (
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-2xl opacity-60" />
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
                            ? "bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md"
                            : "bg-white shadow-sm group-hover:bg-emerald-50"
                        }
                      `}
                    >
                      <Icon
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${
                            isActive
                              ? "text-white"
                              : "text-gray-400 group-hover:text-emerald-500"
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
