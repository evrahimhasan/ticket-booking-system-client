import axios from 'axios';
import React, { useState } from 'react';

const AddTicket = () => {
    const [loading, setLoading] = useState(false);

    const handleAddTicket = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;
        const file = form.busImage.files[0]

        const res = await axios.post(`https://api.imgbb.com/1/upload?key=70a9b49715646353c3c427acfc6b5b47`, { image: file },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        const mainPhotoURL = res.data.data.display_url;

        const ticketData = {
            busName: form.busName.value,
            busType: form.busType.value,
            busNumber: form.busNumber.value,
            from: form.from.value,
            to: form.to.value,
            journeyDate: form.journeyDate.value,
            departureTime: form.departureTime.value,
            price: Number(form.price.value),
            totalSeats: Number(form.totalSeats.value),
            status: form.status.value,
            mainPhotoURL
        };
        console.log(ticketData);

        if (res.data.success == true) {
            axios.post('http://localhost:5000/tickets', ticketData)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }




    return (
        <div className="max-w-xl mx-auto p-6 shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Bus Ticket</h2>

            <form onSubmit={handleAddTicket} className="space-y-3">

                <input name="busName"
                    placeholder="Bus Name"
                    required
                    className="input input-bordered w-full" />

                <select name="busType"
                    className="select select-bordered w-full"
                    required>
                    <option value="">Select Bus Type</option>
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                </select>

                <input
                    type="file"
                    name="busImage"
                    required
                    className="file-input file-input-bordered w-full"
                />

                <input name="busNumber"
                    placeholder="Bus Number"
                    required
                    className="input input-bordered w-full" />

                <div className="grid grid-cols-2 gap-2">
                    <input name="from"
                        placeholder="From"
                        required
                        className="input input-bordered w-full" />
                    <input name="to"
                        placeholder="To"
                        required
                        className="input input-bordered w-full" />
                </div>

                <input type="date"
                    name="journeyDate"
                    required
                    className="input input-bordered w-full" />

                <input type="time"
                    name="departureTime"
                    required
                    className="input input-bordered w-full" />

                <div className="grid grid-cols-2 gap-2">
                    <input type="number"
                        name="price"
                        placeholder="Ticket Price"
                        required
                        className="input input-bordered w-full" />
                    <input type="number"
                        name="totalSeats"
                        placeholder="Total Seats"
                        required
                        className="input input-bordered w-full" />
                </div>

                <select name="status"
                    className="select select-bordered w-full">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <button
                    type="submit"
                    className="btn bg-green-600 text-white w-full mt-3"
                >
                    Add Ticket
                </button>
            </form>

        </div>
    );
};

export default AddTicket;