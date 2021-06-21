export default function TagList({ tags }) {
  return (
    <div class="flex space-x-4">
      {tags.split(" ").map((tag) => {
        return <Tag tag={tag} />;
      })}
    </div>
  );
}

function Tag({ tag }) {
  return (
    <div>
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 align-middle"
        style={{ outline: "none", border: "0" }}
      >
        {tag}
      </span>
    </div>
  );
}
