const Text = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <span className="text-sm text-slate-500 font-mono mb-3">
                    default
                </span>
                <p>The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div>
                <span className="text-sm text-slate-500 font-mono mb-3">
                    italic
                </span>
                <p className="italic">
                    The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            <div>
                <span className="text-sm text-slate-500 font-mono mb-3">
                    underline
                </span>
                <p className="underline">
                    The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            <div>
                <span className="text-sm text-slate-500 font-mono mb-3">
                    overline
                </span>
                <p className="overline">
                    The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            <div>
                <span className="text-sm text-slate-500 font-mono mb-3">
                    line-through
                </span>
                <p className="line-through">
                    The quick brown fox jumps over the lazy dog.
                </p>
            </div>
        </div>
    )
}

export default Text
