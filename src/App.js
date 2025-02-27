import './App.css';

function App() {
  return (
   <main>
    <h1>$400<span>.00</span></h1>
    <form>
      <div className='basics'>
      <input type="text"  placeholder='Item name' />
      <input type="datetime-local" />
      </div>
      <div className='discription'>
      <input type="text" placeholder='Discription' />
      </div>
      <button type="submit" >Add new transaction</button>
    </form>
    <div className='transactions'>
      <div className='transaction'>
        <div className='left'>
          <div className='name'>
            New Samsung TV
            </div>
            <div className='description'> It was for tv</div>
            </div>
            </div>
            <div className='right'>
              <div className='price'>$500</div>
              <div className='date'>2024-22</div>
      </div>
    </div>
   </main>
  );
}

export default App;
