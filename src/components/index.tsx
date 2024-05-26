import TrafficLight from "./TrafficLight";
import ModalForm from "./ModalForm";
import { useState, useEffect } from "react";

export default function App() {
  const idToUpdate = "1";
  const dataApi =
    "https://6650cfde20f4f4c442763130.mockapi.io/trafficLight/users";
  const [formData, setFormData] = useState(null);
  const [trafficStates, setTrafficStates] = useState({
    green: {
      backgroundColor: "green",
      duration: 5000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 2000,
      next: "red",
    },
    red: {
      backgroundColor: "red",
      duration: 5000,
      next: "green",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataApi);
        if (response.ok) {
          const data = await response.json();
          const updatedTrafficStates = {
            green: {
              backgroundColor: "green",
              duration: parseInt(data[0].greenLight) * 1000,
              next: "yellow",
            },
            yellow: {
              backgroundColor: "yellow",
              duration: parseInt(data[0].yellowLight) * 1000,
              next: "red",
            },
            red: {
              backgroundColor: "red",
              duration: parseInt(data[0].redLight) * 1000,
              next: "green",
            },
          };
          setTrafficStates(updatedTrafficStates);
        } else {
          console.error("Failed to fetch data from server.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [formData]);

  const handleSubmit = async (formData: any) => {
    console.log(formData);
    try {
      const response = await fetch(`${dataApi}/${idToUpdate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Data submitted successfully!");
        setFormData(formData);
      } else {
        console.error("Failed to submit data to server.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <div className="my-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl my-4">
          Hệ thống điều kiển đèn giao thông bằng giao diện Web
        </h1>
        <p>Sinh viên : Đinh Duy Thành</p>
        <p>Môn học : Hệ điều hành nhúng</p>
        <p>Giảng viên : Nguyễn Quốc Uy</p>
      </div>

      <div className="flex justify-center items-center">
        <TrafficLight trafficStates={trafficStates} />
        <ModalForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
