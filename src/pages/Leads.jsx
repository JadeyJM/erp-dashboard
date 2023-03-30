import React from 'react'
import { Header } from '../components'
import { ImCheckboxUnchecked } from "react-icons/im"; 
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


const Leads = () => {

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/f3e2bb04-314f-4ad6-b388-ad2df289d87d/tabs/leads"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
<>
      <div className="flex items-end ml-12 mr-12 mb-12 mt-20 relative">

        <button className=" absolute right-0 border-2 p-3 bg-main-dark-bg rounded-xl text-sm text-white mt-4">  <Link to="/newleads">+ NEW LEAD
        </Link>
        </button>

      </div>

      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
        <Header  title="Leads (Lopende Verzoeken)" />
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-gray-100 font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4"><ImCheckboxUnchecked /></th>
                      <th scope="col" className="px-6 py-4">CREATIVE ID</th>
                      <th scope="col" className="px-6 py-4">ORGANIZATION ID</th>
                      <th scope="col" className="px-6 py-4">STATUS</th>
                      <th scope="col" className="px-6 py-4">FUNCTION</th>
                      <th scope="col" className="px-6 py-4">AGENT</th>
                      {/* <th scope="col" class="px-6 py-4">FEE INCL</th>
                      <th scope="col" class="px-6 py-4">AGENCY FEE</th>
                      <th scope="col" class="px-6 py-4">STATUS PAYMENT</th>
                      <th scope="col" class="px-6 py-4">BTW</th>
                      <th scope="col" class="px-6 py-4">INVOICE NUMBER ORG</th>
                      <th scope="col" class="px-6 py-4">INVOICE NUMBER CRV</th> */}
                

                    </tr>
                  </thead>
                {  /*  return x-item for every item of data: organization id , creative id etc*/}
                  {data?.map((item, i) => (
                    <tbody>
                      {/* <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">< ImCheckboxUnchecked/></td>
                        <td className="whitespace-nowrap px-6 py-4">{item.creative_id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.organization_id}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.status}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.type_function}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.agent_id}</td>
                      </tr> */}
                
                <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">< ImCheckboxUnchecked/></td>
                        <td className="whitespace-nowrap px-6 py-4">Dean Bowen</td>
                        <td className="whitespace-nowrap px-6 py-4">Nike</td>
                        <td className="whitespace-nowrap px-6 py-4">Offer sent</td>
                        <td className="whitespace-nowrap px-6 py-4">Moderator</td>
                        <td className="whitespace-nowrap px-6 py-4">Duonia Jari</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">< ImCheckboxUnchecked/></td>
                        <td className="whitespace-nowrap px-6 py-4">Clarice Gargard</td>
                        <td className="whitespace-nowrap px-6 py-4">Addidas</td>
                        <td className="whitespace-nowrap px-6 py-4">Qoutation requested</td>
                        <td className="whitespace-nowrap px-6 py-4">Speaker</td>
                        <td className="whitespace-nowrap px-6 py-4">Duonia Jari</td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">< ImCheckboxUnchecked/></td>
                        <td className="whitespace-nowrap px-6 py-4">Hasna El Maroudi</td>
                        <td className="whitespace-nowrap px-6 py-4">Addidas</td>
                        <td className="whitespace-nowrap px-6 py-4">Qoutation requested</td>
                        <td className="whitespace-nowrap px-6 py-4">Speaker</td>
                        <td className="whitespace-nowrap px-6 py-4">Aimee Debaukssen</td>
                      </tr>



                    </tbody>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Leads