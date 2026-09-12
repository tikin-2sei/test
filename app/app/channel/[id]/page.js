export default function ChannelPage({ params }) {
  // 本来は params.id を元に API からチャンネル情報を取得します
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* チャンネルヘッダー */}
      <div className="relative rounded-3xl overflow-hidden h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6 px-4 mb-8">
        <div className="w-24 h-24 rounded-full bg-purple-600 border-4 border-gray-900 flex items-center justify-center text-3xl font-bold shadow-xl shadow-purple-500/20">
          C
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold">デモチャンネル ({params.id})</h1>
          <p className="text-gray-400 text-sm mt-1">チャンネル登録者数 15.4万人 • 120本の動画</p>
        </div>
        <button className="bg-white text-gray-900 font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition">
          チャンネル登録
        </button>
      </div>

      <hr className="border-white/10 mb-8" />
      <h2 className="text-xl font-bold mb-6">アップロード動画</h2>
      {/* ここに動画グリッド（Homeと同じコンポーネントなど）を配置 */}
    </div>
  );
}
