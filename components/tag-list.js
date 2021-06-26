export default function TagList({ tags, selectedTags, setSelectedTags }) {
  return (
    <div>
      {tags.split(" ").map((tag) => {
        return (
          <Tag
            tag={tag}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        );
      })}
    </div>
  );
}

function Tag({ tag, selectedTags, setSelectedTags }) {
  return (
    <>
      <span
        className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 align-middle"
        style={{ outline: "none", border: "0" }}
        onClick={() => {
          if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
          }
        }}
      >
        {tag + ' '}
        {selectedTags.includes(tag) ? <button onClick={event => { event.stopPropagation(); setSelectedTags([]) }}>x</button> : null}
      </span>
    </>

  );
}
