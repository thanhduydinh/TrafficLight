import { useState } from "react";

interface FormData {
  greenLight: string;
  yellowLight: string;
  redLight: string;
}

interface ModalFormProps {
  onSubmit: (formData: FormData) => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    greenLight: "",
    yellowLight: "",
    redLight: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      greenLight: "",
      yellowLight: "",
      redLight: "",
    });
    closeModal();
  };

  return (
    <>
      <button
        onClick={openModal}
        className="bg-blue-500 h-10 text-white ml-10 font-bold py-2 px-4 rounded"
      >
        Change Delay
      </button>
      {isOpen && (
        <div className="fixed bg-dark-100 w-screen h-screen inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white w-1/3 h-1/2 p-8 rounded z-50">
            <h2 className="text-xl font-bold mb-4">Modal Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="greenLight"
                  className="block text-sm font-bold mb-2"
                >
                  Green light
                </label>
                <input
                  type="text"
                  id="greenLight"
                  name="greenLight"
                  value={formData.greenLight}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="yellowLight"
                  className="block text-sm font-bold mb-2"
                >
                  Yellow light
                </label>
                <input
                  type="text"
                  id="yellowLight"
                  name="yellowLight"
                  value={formData.yellowLight}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="redLight"
                  className="block text-sm font-bold mb-2"
                >
                  Red light
                </label>
                <input
                  type="text"
                  id="redLight"
                  name="redLight"
                  value={formData.redLight}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;
