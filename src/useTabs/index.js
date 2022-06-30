import { useTabs } from "./useTabs";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

export default function App() {
  const { currentItem, changeItem, reset } = useTabs(0, contents);

  return (
    <>
      <button onClick={reset}>reset</button>
      {contents.map((section, idx) => (
        <button key={idx} onClick={() => changeItem(idx)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </>
  );
}
