export default function TagList({ tags }) {
  return (
    <div>
      {tags.split(" ").map((tag) => {
        return <Tag tag={tag} />;
      })}
    </div>
  );
}

function Tag({ tag }) {
  return (
    <span
      class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 align-middle"
      style={{ outline: "none", border: "0" }}
    >
      {tag}
    </span>
  );
}
