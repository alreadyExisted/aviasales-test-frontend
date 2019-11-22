import './App.css'
import React from 'react'
import logo from 'assets/logo.svg'
import { FilterPicker } from 'components/filter-picker'
import { Provider } from 'react-redux'
import { SortingSwitcher } from 'components/sorting-switcher'
import { TicketContainer } from 'components/ticket-container'
import { store } from 'store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-main">
          <aside className="App-sidebar">
            <FilterPicker />
          </aside>
          <section className="App-content">
            <SortingSwitcher />
            <TicketContainer />
          </section>
        </main>
      </div>
    </Provider>
  )
}

export default App
