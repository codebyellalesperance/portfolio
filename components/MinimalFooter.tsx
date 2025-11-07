export default function MinimalFooter() {
  return (
    <footer className="bg-[#F7F6F3] border-t border-gray-300 py-8 w-full">
      <div className="text-center text-xs tracking-widest text-black/40">
        [ BOSTON, MA ]
      </div>
      <div className="text-center text-xs text-black/30 mt-4">
        © {new Date().getFullYear()} ELLA L'ESPERANCE. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}

