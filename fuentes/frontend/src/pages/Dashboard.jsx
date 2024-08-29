import Card from "../components/Card";
import PendingService from "../components/PendingService";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function Dashboard() {
    return <div className="w-full">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-8">
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
            <div className="w-full lg:w-1/2 p-4">
                <p>col 2</p>
            </div>
        </div>
    </div>
}