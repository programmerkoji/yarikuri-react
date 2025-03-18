import React from 'react'
import { Link } from 'react-router'

export const ItemForm = () => {
  
  return (
    <form
									className="lg:w-3/4 mx-auto devide devide-y"
									onSubmit={handleSubmit}
								>
									<div className="flex flex-col lg:flex-row gap-4">
										<div className="w-full">
											<label className="leading-7 text-sm text-gray-600">
												項目名
											</label>
											<input
												type="name"
												name="name"
												value={formData.name}
												className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
												onChange={handleChange}
											/>
										</div>
										<div className="w-full">
											<label className="leading-7 text-sm text-gray-600">
												金額
											</label>
											<input
												type="price"
												name="price"
												value={formData.price ?? ""}
												className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="flex gap-2 items-center flex-wrap">
										<button className="text-white bg-blue-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
											登録する
										</button>
										<Link
											to="/item"
											className="text-white bg-gray-500 border-0 mt-4 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
										>
											戻る
										</Link>
									</div>
								</form>
  )
}
