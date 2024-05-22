function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("iRunOnly");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(keyword);
    }
    return () => {
      console.log("안돼");
    };
  }, [keyword]);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
