import React from 'react'

export default function ExpenseForm() {
  return (
    <form className=' space-y-5'>
        <legend className=' uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2'>
            Nuevo Gasto</legend>

            <div className=' flex flex-col gap-2'>
                <label 
                htmlFor="expenseName"
                className='text-xl'

                >
                    Nuevo Gasto</label>
                    <input 
                    type="text"
                    id='expenseName'
                    placeholder='Añade el nombre del gasto' 
                    className='bg-slate-100 p-2'
                    name='expenseName'
                    />

            </div>

            <div className=' flex flex-col gap-2'>
                <label 
                htmlFor="amount"
                className='text-xl'

                >
                    Cantidad:</label>
                    <input 
                    type="text"
                    id='amount'
                    placeholder='Añade el nombre del gasto' 
                    className='bg-slate-100 p-2'
                    name='amount'
                    />

            </div>

        

    </form>
  )
}
