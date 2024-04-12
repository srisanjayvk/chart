// import React from 'react';
// import Chart from 'react-apexcharts';

// function ComboChart() {
//     const options = {
//         chart: {
//             stacked: false,
//             toolbar: {
//                 show: false,
//             },
//         },
//         stroke: {
//             width: [0, 2, 5],
//             curve: 'smooth',
//         },
//         plotOptions: {
//             bar: {
//                 columnWidth: '20%',
//                 endingShape: 'rounded',
//             },
//         },
//         markers: {
//             size: 5,
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         legend: {
//             show: true,
//         },
//         xaxis: {
//             categories: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
//         },
//         yaxis: [
//             {
//                 title: {
//                     text: 'Medals Range',
//                     style: {
//                         color: '#000000',
//                       },
//                 },
//                 categories: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
//                 min: 0,
//                 max: 1000
//             },
//             {
//                 opposite: true,
//                 title: {
//                     text: 'Profit (in millions)',
//                 },
//                 min: 0,
//                 max: 1000
//             },
//         ],
//         tooltip: {
//             shared: true,
//             intersect: false,
//             y: {
//                 formatter: function (y) {
//                     if (typeof y !== 'undefined') {
//                         return y.toFixed(0) + ' Medals';
//                     }
//                     return y;
//                 },
//             },
//         },
//     };

//     const series = [
//         {
//             name: 'USA',
//             type: 'column',
//             data: [150, 220, 300, 310, 430, 510, 650, 750, 760, 820],
//             // '2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'
//         },
//         {
//             name: 'India',
//             type: 'column',
//             data: [110, 250, 200, 360, 480, 540, 600, 710, 800, 825],
//         },
//         {
//             name: 'China',
//             type: 'column',
//             data: [120, 180, 250, 330, 440, 510, 700, 670, 670, 710],
//         },
//         {
//             name: 'Total',
//             type: 'line',
//             data: [80, 150, 190, 230, 200, 210, 230, 280, 340, 380],
//             yAxisIndex: 1,
//         },
//     ];

//     return (
//         <div className=" bg-[#ffffff] w-full mt-4 p-4 rounded-xl border-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
//             <div className="text-xl text-[#383f50] font-bold mb-2">
//                 Combo Chart
//             </div>
//             <Chart options={options} series={series} type="line"  height={350} />
//         </div>
//     );
// }

// export default ComboChart;


import React from 'react';
import Chart from 'react-apexcharts';

function ComboChart() {
    const options = {
        chart: {
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '20%',
                endingShape: 'rounded',
            },
        },
        markers: {
            size: 5,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
        },
        xaxis: {
                categories: ['2005', '2007', '2009', '2011', '2013', '2015', '2017', '2019', '2021', '2023'],
                 },
        yaxis: [
            {
                title: {
                    text: 'Medal Range',
                },
            },
            {
                opposite: true,
                title: {
                    text: 'Total Medal Curve',
                },
            },
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' dollars';
                    }
                    return y;
                },
            },
        },
    };

    const series = [
        {
            name: 'INDIA',
            type: 'column',
            data: [230, 350, 420, 550, 630, 710, 830, 950, 1080, 1200],
        },
        {
            name: 'USA',
            type: 'column',
            data: [120, 200, 290, 360, 430, 500, 600, 670, 740, 820],
        },
        {
            name: ' TOTAL MEDAL',
            type: 'line',
            data: [80, 110, 130, 180, 200, 230, 260, 300, 340, 380],
            yAxisIndex: 1,
        },
    ];

    return (
        <div className=" bg-[#ffffff] w-full mt-4 p-4 rounded-xl border-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <h2 className="text-xl text-[#383f50] font-bold mb-2">Combo Chart</h2>
            <Chart options={options} series={series} type="line"  height={350} />
        </div>
    );
}

export default ComboChart; 