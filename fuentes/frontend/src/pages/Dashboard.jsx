import Card from "../components/Card";
import PendingService from "../components/PendingService";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Dashboard() {
    return <div className="w-full">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 py-8 px-4">
                <h3 className="bold text-xl mb-4">Servicios pendientes</h3>
                <Card maxHeight={250} scrollable>
                    <PendingService
                    typeService={"Tarea"}
                    timeRemaining={"1h30m"}
                    workerName={"Asthri Pardavé"}
                    topics={["C++", "Arrays", "Matrices"]}
                    />
                    <PendingService
                    typeService={"Tarea"}
                    timeRemaining={"2h10m"}
                    workerName={"Luis La Torre"}
                    topics={["Bootstrap"]}
                    />
                </Card>
            </div>
            <div className="w-full lg:w-1/2 py-8 px-4">
                <h3 className="bold text-xl mb-4">Ganancias de la semana</h3>
                <Card maxHeight={250}>
                    <Bar
                    data={{
                        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Sabado', 'Domingo'],
                        datasets: [{
                            label: 'Ganancias de la semana',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)'
                              ],
                        }]
                    }}/>
                </Card>
            </div>
        </div>
    </div>
}