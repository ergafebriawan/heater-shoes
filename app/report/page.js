import Link from "next/link";

export default function Report() {
    return (
        <>
            <div className='bg-purple-500 sticky top-0 left-0 right-0 py-5 px-5 flex justify-between'>
                <Link href="/"><label className="text-2xl font-semibold">Heater Shoes</label></Link>
                <Link href="/report">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillrule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>

                    </span>
                </Link>
            </div>
            <main className="flex flex-col justify-center p-5 shadow-lg rounded-lg m-2 bg-gray-800">
                <h2 className="text-3xl font-semibold pb-5 text-center">Reports</h2>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Estimate
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium  whitespace-nowrap "
                                >
                                    Success
                                </th>
                                <td className="px-6 py-4">10:37:34</td>
                                <td className="px-6 py-4">01/12/2023</td>
                            </tr>
                            <tr className=" border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium  whitespace-nowrap "
                                >
                                    Success
                                </th>
                                <td className="px-6 py-4">10:37:34</td>
                                <td className="px-6 py-4">01/12/2023</td>
                            </tr>
                            <tr className=" border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium  whitespace-nowrap "
                                >
                                    Success
                                </th>
                                <td className="px-6 py-4">10:37:34</td>
                                <td className="px-6 py-4">01/12/2023</td>
                            </tr>
                            <tr className=" border-b ">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium  whitespace-nowrap "
                                >
                                    Success
                                </th>
                                <td className="px-6 py-4">10:37:34</td>
                                <td className="px-6 py-4">01/12/2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </>
    )
}