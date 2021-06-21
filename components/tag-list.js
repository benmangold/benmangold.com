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
  return <div>
        <button class="hover:underline" style={{outline:"none", border: "0"}}>{tag}</button> 
      </div>
}
