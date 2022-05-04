import '../App.css';
import { React, useEffect, useState} from 'react';
import Axios from 'axios';
import CoinCard from '../components/CoinCard';
import News from '../components/News';
import Loader from '../components/UI/Loader/Loader';
import Pagination from '../components/Pagination';

function Coins() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [coinsPerPage] = useState(10)

  useEffect(() => {
    setIsLoading(true)
      Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0`)
      .then((response) => {
        setListOfCoins(response.data.coins);
      })
      Axios.get('https://api.coinstats.app/public/v1/news?skip=0&limit=15')
      .then((response) => {
        setNews(response.data.news);
        setIsLoading(false)
      })
  }, [])
    
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase()) || coin.symbol.toLowerCase().includes(searchWord.toLowerCase());
  })

  const lastCoinIndex = currentPage * coinsPerPage
  const firstCoinIndex = lastCoinIndex - coinsPerPage
  const currentCoin = filteredCoins.slice(firstCoinIndex, lastCoinIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='App'>
      <div className="cryptoHeader">
        <div className='navContainer'>
          <a href='https://www.binance.com/ru' className='navLogo'><img src="https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png" alt="" /></a>
        </div>
        <input type="text" placeholder="Enter the name of the coin..." 
          onChange={(event) => {
            setSearchWord(event.target.value)
          }}>
        </input>
      </div>
      <div className='cryptoContainer' >
        {isLoading 
            ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>
            : <div id='content' className="cryptoDisplay">{currentCoin.map((coin) => {
              return <CoinCard id={coin.id} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} coin={coin}/>
            })}
            <div className='paginateCoins'>
              <Pagination 
                coinsPerPage={coinsPerPage}
                totalCoins={filteredCoins.length}
                paginate={paginate}
              />
            </div>
        </div>
        }
        <div id='sidebar' className='cryptoNews'>{news.map((news) => {
          return <News title={news.title} feedDate={news.feedDate} link={news.link} />
        })}
        
        </div>
      </div>
    </div>
  );
}

export default Coins;
