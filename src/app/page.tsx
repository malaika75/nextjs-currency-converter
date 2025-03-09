import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");

  const countries = {
    USD: { name: "United States Dollar", flag: "https://flagsapi.com/US/flat/64.png" },
    EUR: { name: "Euro", flag: "https://flagsapi.com/EU/flat/64.png" },
    AUD: { name: "Australian Dollar", flag: "https://flagsapi.com/AU/flat/64.png" },
    PKR: { name: "Pakistani Rupee", flag: "https://flagsapi.com/PK/flat/64.png" },
    CNY: { name: "Chinese Yuan", flag: "https://flagsapi.com/CN/flat/64.png" },
    JPY: { name: "Japanese Yen", flag: "https://flagsapi.com/JP/flat/64.png" },
    CAD: { name: "Canadian Dollar", flag: "https://flagsapi.com/CA/flat/64.png" },
    GBP: { name: "British Pound", flag: "https://flagsapi.com/GB/flat/64.png" },
    INR: { name: "Indian Rupee", flag: "https://flagsapi.com/IN/flat/64.png" },
    AED: { name: "UAE Dirham", flag: "https://flagsapi.com/AE/flat/64.png" },
    SAR: { name: "Saudi Riyal", flag: "https://flagsapi.com/SA/flat/64.png" },
  };

  const handleFromChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCurrency(event.target.value);
  };

  const handleToChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(event.target.value);
  };
  

  return (
    <>
    <div className="bg-gray-700 py-4 text-white">
      <h1 className="text-2xl ml-8">currency converter</h1>
    </div>
    <div className="flex justify-between">
    
    <div className="flex flex-col m-20 bg-primary border-4 border-gray-700 rounded-md">
    <div className="m-10">
      <p className="text-2xl">Enter amount</p>
      <input type="number" placeholder="enter amount"  className="border-2 border-gray-600 p-2"></input>
    </div>
    
    <div className="m-10 flex gap-10">
      <div className="mb-10">
        <Image src="https://flagsapi.com/US/flat/64.png" alt="flags" height={64} width={64} />
      <p>From</p>
      <select className="p-2 border-2 border-gray-800 rounded-md" value={fromCurrency} onChange={handleFromChange}>
        {Object.keys(countries).map((fromCurrency) => ( //object.key
        <option key={fromCurrency} value={fromCurrency}>
        {countries[fromCurrency].name} ({fromCurrency})
</option>
))}
      </select>
      </div>
      <i className="fa-solid fa-arrow-right-arrow-left mt-4 text-2xl"></i>
      <div>
        <Image src="https://flagsapi.com/PK/flat/64.png" alt="flags" height={64} width={64} />
      <p>To</p>
      <select className="p-2 border-2 border-gray-800 rounded-md">
      <option value="United States Dollar">USD</option>
        <option value="Euro">EUR</option>
        <option value="Australian Dollar">AUD</option>
        <option value="Pakistani Rupee" selected>PKR</option>
        <option value="Chinese Yuan">CNY</option>
        <option value="Japanese Yen">JPY</option>
        <option value="Canadian Dollar">CAD</option>
        <option value="British Pound">GBP</option>
        <option value="Indian Rupee">INR</option>
        <option value="UAE Dirham">AED</option>
        <option value="Saudi Riyal">SAR</option>
      </select>
      </div>
      <div>
      <p className="ml-2 text-xl mt-6">1 USD = 120 PKR</p>
      <button className="bg-gray-400 p-2 rounded-full border-4 border-gray-800 hover:bg-slate-900 hover:text-white text-xl mt-4 cursor-pointer">get exchange rate</button>
      </div>
</div>
    </div>
    <div className="">
      <img src="https://www.shutterstock.com/image-vector/currency-exchange-money-conversion-euro-600nw-1919947535.jpg" alt="" />
      </div>
      
    </div>
    </>
    )}