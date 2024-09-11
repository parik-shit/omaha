import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const CardList = () => {
    const svgRef1 = useRef();
    const svgRef2 = useRef();
    const svgRef3 = useRef();
    const svgRef4 = useRef();
  const data = [
    { value: 50 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 35 },
    { value: 30 },
    { value: 20 },
    { value: 40 },
    { value: 35 },
    { value: 35 },
    { value: 35 },
    { value: 35 },
    { value: 25 },
    { value: 10 },
  ];

  useEffect(() => {
    const drawChart = (svgRef, data) => {
      const svg = d3.select(svgRef);
      const width = 250; // Width of the card
      const height = 160; // Height of the card

      const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
      const yScale = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).range([height, 0]);

      const line = d3.line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d.value));

      svg.selectAll('*').remove();

      // Append the line path
      svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#3182CE') // Line color
        .attr('stroke-width', 2) // Line thickness
        .attr('d', line);

      // Append the area under the line
      svg.append('path')
        .datum(data)
        .attr('fill', 'rgba(121, 174, 212, 0.5)') // Area fill color
        .attr('d', d3.area()
          .x((d, i) => xScale(i))
          .y0(height)
          .y1(d => yScale(d.value))
        );

      // Append x-axis on top
      svg.append('g')
        .attr('transform', `translate(0,${height})`);

      // Append y-axis on the left
      svg.append('g');
    };

    drawChart(svgRef1.current, data);
    drawChart(svgRef2.current, data);
    drawChart(svgRef3.current, data);
    drawChart(svgRef4.current, data);
  }, [data]);
  return (
    <div className="flex justify-between items-center w-full">
        {/* card */}
    <div className="relative bg-sky-400 bg-opacity-50 shadow-lg rounded-2xl overflow-hidden flex items-center justify-center  " style={{ width: '250px', height: '160px' }}>
      <div className="absolute text-white inset-0 flex items-center ml-5">
        <div className="bg-opacity-0 rounded-lg">
          <p className="text-md font-semibold">Efficiency</p>
          <p className="text-sm">Lorem Ipsum:</p>
          {/* <p className='text-4xl mt-2 font-semibold'>{data.reduce((acc, cur) => acc + cur.value, 0)}</p> */}
          <p className='text-4xl mt-2 font-semibold'>1.1921</p>
          <p className="text-md">+0.0015 (+0.13%)</p>
          {/* <p className='text-sm'>Average: {data.reduce((acc, cur) => acc + cur.value, 0) / data.length}</p> */}
          <p className='text-sm'>0.00 USD</p>
        </div>
      </div>
      <div className="w-full h-full rounded overflow-hidden shadow-lg">
        <svg ref={svgRef1} width="100%" height="100%" style={{ borderRadius: 'inherit' }}></svg>
      </div>
    </div>
    <div className="relative bg-teal-600  shadow-lg rounded-2xl overflow-hidden flex items-center justify-center  ml-20" style={{ width: '250px', height: '160px' }}>
      <div className="absolute text-white inset-0 flex items-center ml-5">
        <div className="bg-opacity-0 rounded-lg">
          <p className="text-md font-semibold">Time To Market</p>
          <p className="text-sm">Lorem Ipsum:</p>
          <p className='text-4xl mt-2 font-semibold'>327,176</p>
          <p className="text-md">+0.0015 (+0.13%):</p>
          <p className='text-sm'>131,040,723,108 JPY</p>
        </div>
      </div>
      <div className="w-full h-full rounded overflow-hidden shadow-lg">
        <svg ref={svgRef2} width="100%" height="100%" style={{ borderRadius: 'inherit' }}></svg>
      </div>
    </div>
    <div className="relative  bg-opacity-50 shadow-lg rounded-2xl overflow-hidden flex items-center justify-center mx-auto" style={{ width: '250px', height: '160px' }}>
      <div className="absolute text-black inset-0 flex items-center ml-5">
        <div className="bg-opacity-0 rounded-lg">
          <p className="text-md font-semibold">Tech Debt</p>
          <p className="text-sm">Lorem Ipsum</p>
          <p className='text-4xl mt-2 font-semibold'>1.1763</p>
          <p className="text-md">+0.0015 (+0.13%)</p>
          <p className='text-sm'>0.00 USD</p>
        </div>
      </div>
      <div className="w-full h-full rounded overflow-hidden shadow-lg">
        <svg ref={svgRef3} width="100%" height="100%" style={{ borderRadius: 'inherit' }}></svg>
      </div>
    </div>
    <div className="relative bg-red-500  shadow-lg rounded-2xl overflow-hidden flex items-center justify-center " style={{ width: '250px', height: '160px' }}>
      <div className="absolute text-white inset-0 flex items-center ml-5">
        <div className="bg-opacity-0 rounded-lg">
          <p className="text-md font-semibold">Predictability</p>
          <p className="text-sm">Lorem Ipsum:</p>
          <p className='text-4xl mt-2 font-semibold'>0.00313010</p>
          <p className="text-md">+0.0015 (+0.13%)</p>
          <p className='text-sm'>1,566 BTC</p>
        </div>
      </div>
      <div className="w-full h-full rounded overflow-hidden shadow-lg">
        <svg ref={svgRef4} width="100%" height="100%" style={{ borderRadius: 'inherit' }}></svg>
      </div>
    </div>
    
    </div>
  );
};

export default CardList;
