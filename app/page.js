"use client";
import { useState } from "react";
import { Search, Tv, Flame, History } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // ダミーの動画データ (Piped / Invidious APIから取得する想定)
  const dummyVideos = [
    { id: "1", title: "最高の作業用BGM - Lo-Fi Hip Hop Mix 2026", channel: "Lofi Coding", channelId: "ch1", views: "12万回", date: "3日前", thumbnail: "https://unsplash.com" },
    { id: "2", title: "Next.js 14 と Railway で爆速Webサイト開発チュートリアル", channel: "DevStream", channelId: "ch2", views: "4.5万回", date: "1週間前", thumbnail: "https://unsplash.com" },
    { id: "3", title: "旅行Vlog：静かな北欧の冬の街を歩く景色映像", channel: "Wanderlust", channelId: "ch3", views: "8,900回", date: "1か月前", thumbnail: "https://unsplash.com" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* サイドバー */}
      <aside className="w-64 bg-gray-900/60 backdrop-blur-md p-4 hidden md:flex flex-col gap-2 border-r border-white/10">
        <div className="flex items-center gap-2 px-2 py-3 mb-4 text-xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          <Tv className="text-pink-500" /> AlternativeStream
        </div>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/10 text-white font-medium transition"><Flame size={20}/>急上昇</button>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition"><History size={20}/>履歴</button>
      </aside>

      {/* メインコンテンツエリア */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* ヘッダー / 検索バー */}
        <header className="p-4 bg-gray-900/40 backdrop-blur-md flex justify-between items-center sticky top-0 z-10 border-b border-white/5">
          <div className="w-full max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Piped/Invidious から動画を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-5 pl-12 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <Search className="absolute left-4 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-5 py-2 rounded-full text-sm font-semibold transition shadow-lg shadow-purple-500/20">
              検索
            </button>
          </div>
        </header>

        {/* 動画グリッド */}
        <div className="p-6 max-w-7xl mx-auto w-full">
          <h2 className="text-xl font-bold mb-6">おすすめの動画</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyVideos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(139,92,246,0.3)] cursor-pointer"
              >
                {/* サムネイル */}
                <div className="aspect-video relative overflow-hidden bg-gray-800">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                {/* メタデータ */}
                <div className="p-4">
                  <h3 className="font-semibold line-clamp-2 group-hover:text-purple-400 transition">{video.title}</h3>
                  <a href={`/channel/${video.channelId}`} className="text-sm text-gray-400 mt-2 block hover:text-white transition">
                    {video.channel}
                  </a>
                  <div className="flex gap-2 text-xs text-gray-500 mt-1">
                    <span>{video.views}</span>•<span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
