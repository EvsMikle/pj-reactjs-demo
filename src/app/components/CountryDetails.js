'use client'
import React, { startTransition, useEffect, useState } from 'react'
import CountryCard from './card'

const CountryDetails = ({ data }) => {
    const [results, setResults] = useState(data)
    const [search, setSearch] = useState('')
    useEffect(() => {
        if (search) {
            startTransition(() => {
                const filteredData = data.filter(country =>
                    country.name.common.toLowerCase().includes(search.toLowerCase())
                );
                setResults(filteredData)
            })

        }

    }, [search, data])

    if (results) {
        return (
            <div className="max-w-3xl mx-auto my-8 p-4  ">
                <input
                    type="text"
                    placeholder="Search country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
                />
                {results.map((country, index) => (
                    <CountryCard key={index} countryData={country} />
                ))}
            </div>
        )
    }
}

export default CountryDetails