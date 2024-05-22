function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");
  const [price, setPrice] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }
    console.log(coins.map((coin) => coin.quotes.USD.price));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}{" "}
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="number"
          placeholder="가격을 입력해주세요"
        />
        <button>검색</button>
      </form>
      {price}
    </div>
  );
}
