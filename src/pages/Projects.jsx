import React from 'react'
import { Header } from '../components'
import { ImCheckboxUnchecked } from "react-icons/im"; 
import { Link } from 'react-router-dom';
function Projects() {
  return (
    <>
      <div className=" flex items-end ml-12 mr-12 mb-12 mt-20 relative">

        <button className=" absolute right-0 border-2 p-3 bg-main-dark-bg rounded-xl text-sm text-white mt-4">  <Link to="/newcontact">+ ADD NEW CONTACT
        </Link>
        </button>

      </div>

      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
        <Header category="CRM" title="Project Management" />
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-gray-100 font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4"><ImCheckboxUnchecked /></th>
                      <th scope="col" class="px-6 py-4">TITLE EVENT/PROJECT</th>
                      <th scope="col" class="px-6 py-4">DATE</th>
                      <th scope="col" class="px-6 py-4">STATUS</th>
                      <th scope="col" class="px-6 py-4">CREATIVE</th>
                      <th scope="col" class="px-6 py-4">AGENT</th>


                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium"><ImCheckboxUnchecked /></td>
                      <td className="whitespace-nowrap px-6 py-4">Clarice Gargard</td>
                      <td className="whitespace-nowrap px-6 py-4">claricegargard@liluthagency.nl</td>
                      <td className="whitespace-nowrap px-6 py-4">+31 676788895</td>
                      <td className="whitespace-nowrap px-6 py-4">Creative</td>

                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium "><ImCheckboxUnchecked /></td>

                      <td className="whitespace-nowrap px-6 py-4">Duonia Jari</td>
                      <td className="whitespace-nowrap px-6 py-4">dounia@lilitagency.nl</td>
                      <td className="whitespace-nowrap px-6 py-4">+31 676788895</td>
                      <td className="whitespace-nowrap px-6 py-4">Creative</td>

                    </tr>
                    <tr className="border-b ">
                      <td className="whitespace-nowrap px-6 py-4 font-medium "><ImCheckboxUnchecked /></td>

                      <td className="whitespace-nowrap px-6 py-4">Afiah Vijlbrief</td>
                      <td className="whitespace-nowrap px-6 py-4">afiah@lilthagency.nl</td>
                      <td className="whitespace-nowrap px-6 py-4">+31 676788895</td>
                      <td className="whitespace-nowrap px-6 py-4">Creative</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
}

export default Projects