import React from 'react';
import Chart from 'react-apexcharts';

function DonutChart () {
    return(
        <div className='flex justify-center'>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-[#ffffff] rounded-xl border-2 mt-4  p-4 mb-4 ">
                <h2 className="text-xl text-[#383f50]  font-bold mb-2">Donut Chart</h2>
                <Chart
                    className=""
                    type="donut"
                    series={[89,80,75,68,60]}
                    options={{ 
                        labels:['INDIA','USA','RUSSIA','CHINA','JAPAN'],
                        title:{
                            text:"Medal Country Name",
                            style: {
                                color: '#a4b2cd',
                              },
                        },
                        plotOptions:{
                            pie:{
                                donut:{
                                    labels:{
                                        show:true,
                                        total:{
                                            show:true,
                                            showAlways:false,
                                            fontsize:30,
                                            color: '#f90000',
                                        }
                                    }
                                }
                            }
                        },
                        dataLabels:{
                            enabled:true,
                        },
                        legend: {
                            position: 'bottom',
                        },
                    }}
                    width="100%"
                    height="450px"
                />
            </div>
        </div>
    );
}

export default DonutChart;