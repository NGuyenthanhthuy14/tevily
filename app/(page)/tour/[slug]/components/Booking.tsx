import React, { useState } from 'react';
import { Calendar, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Booking() {

  const [tickets, setTickets] = useState({ adult: 1, youth: 0, children: 0 });
  const [extras, setExtras] = useState({ serviceBooking: false, servicePerson: false });

  const prices = { adult: 69, youth: 59, children: 49, extraBooking: 30, extraPersonAdult: 17 };

  const total = (tickets.adult * prices.adult) + 
                (tickets.youth * prices.youth) + 
                (tickets.children * prices.children) +
                (extras.serviceBooking ? prices.extraBooking : 0) +
                (extras.servicePerson ? prices.extraPersonAdult : 0);

  return (
    <div className="w-95 bg-[#fbf7f0] p-8  shadow-sm font-sans text-[#1e2236] ">
      
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-8 bg-[#f45e49]"></div>
        <h2 className="text-[26px] font-bold">Booking Tour</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <label className="font-bold text-[17px]">From:</label>
          <div className="relative flex-1 max-w-[200px]">
            <input 
              type="text" 
              placeholder="28/01/2026" 
              className="w-full py-3 px-4 rounded-lg border border-gray-200 bg-white focus:outline-none text-gray-500"
            />
            <Calendar className="absolute right-3 top-3 text-[#f45e49]" size={20} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="font-bold text-[17px]">Time:</label>
          <div className="flex items-center gap-2">
            <input type="radio" checked readOnly className="accent-[#f45e49] w-4 h-4" />
            <span className="text-gray-600 font-medium">8:00 am</span>
          </div>
        </div>

        {/* PHẦN CHỌN VÉ (Tickets) */}
        <div className="pt-4">
          <h3 className="font-bold text-[18px] mb-4">Tickets:</h3>
          <div className="space-y-4">
            {['Adult (18+ years) $69.00', 'Youth (13-17 years) $59.00', 'Children (0-12 years) $49.00'].map((label, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-500 font-medium">{label}</span>
                <div className="relative">
                  <select className="appearance-none bg-white border border-gray-200 py-2 px-6 pr-10 rounded-lg focus:outline-none">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ĐỊA ĐIỂM TẬP KẾT */}
        <div className="pt-4">
          <h3 className="font-bold text-[17px] leading-snug mb-3">Select meeting point (find closest location):</h3>
          <div className="flex gap-3">
            <input type="radio" className="mt-1 accent-[#f45e49]" />
            <p className="text-[15px] text-gray-500 leading-tight">
              10:00 am, 8:00 am - <span className="font-semibold text-gray-700">Sandos Papagayo Beach Resort, Calle las Acacias, Yaiza, España</span>
            </p>
          </div>
        </div>

        {/* DỊCH VỤ THÊM (Add Extra) */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-bold text-[18px] mb-4">Add Extra</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 text-gray-600 font-medium">
                <input type="checkbox" className="w-4 h-4 rounded accent-[#f45e49]" /> Service per booking
              </label>
              <span className="font-bold">$30.00</span>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 text-gray-600 font-medium">
                <input type="checkbox" className="w-4 h-4 rounded accent-[#f45e49]" /> Service per person
              </label>
              <div className="text-right text-sm">
                <p>Adult: <span className="font-bold">$17.00</span></p>
                <p>Youth: <span className="font-bold">$14.00</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* TỔNG TIỀN & NÚT ĐẶT */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[22px] font-bold">Total:</span>
            <span className="text-[28px] font-bold text-[#f45e49]">${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#f45e49] hover:bg-[#d44d3a] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all">
            <ShoppingCart size={22} />
            BOOK NOW
          </button>
        </div>

      </div>
    </div>
  );
};

