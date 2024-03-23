import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useFetcher } from 'react-router-dom'

function AddExpenseForm({budgets}) {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"
    const formref = useRef();
    const focusref = useRef();

    useEffect(() => {
        if(!isSubmitting){
            formref.current.reset();
            focusref.current.focus();
        }
    }, [isSubmitting])

  return (
    <div className='form-wrapper'>
        <h2 className='h3'>Add New {" "} <span className="accent"> 
            {
                budgets.length === 1 && `${budgets.map((budg) => budg.name)}`
            }
            </span>{' '}
            Expense
        </h2>
        <fetcher.Form
            method='post'
            className='grid-sm'
            ref={formref}
        >
            <div className='expense-inputs'>
                <div className='grid-xs'>
                    <label htmlFor='newExpense'>Expense Name</label>
                    <input 
                        type='text'
                        name='newExpense'
                        id='newExpense'
                        placeholder='coffee'
                        ref={focusref}
                        required
                    />
                </div>
                <div className='grid-xs'>
                    <label
                    htmlFor='newExpenseAmount'>Amount</label>
                    <input 
                        type='number'
                        step='0.01'
                        inputMode='decimal'
                        name='newExpenseAmount'
                        id='newExpenseAmount'
                        placeholder='3.500'
                        required
                     />
                </div>
            </div>
            <div className="grid-xs" hidden={budgets.length === 1}>
                <label htmlFor="newExpenseBudget">Budget Category</label>
                <select name='newExpenseBudget' id='newExpenseBudget' required>
                    {
                        budgets.sort((a,b) => a.createdAt - b.createdAt)
                        .map((budget) => {
                            return (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
            <input type='hidden' name='_action' value='createExpense' />
            <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
            {
                isSubmitting? <span>Creating Budget...</span> 
                :(
                    <>
                    <span>Add expense</span>
                    <PlusCircleIcon width={20} />
                    </>
                )
            }
            </button>
        </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm