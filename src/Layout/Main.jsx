import React from 'react'



const Main = ({ sidebar, folderName, content, toolbar,preview }) => {


    return (
        <main className="h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-amber-800 text-white p-4">
                {sidebar}
            </div>

            {/* Right side: TopNav + Content */}
            <div className="flex flex-col flex-1">
                {/* Top Navbar */}
                <div className="h-16 bg-white shadow flex items-center justify-between px-6">
                    <h1 className="text-xl font-semibold"> {folderName}</h1>
                    <input
                        type="text"
                        placeholder="Ara..."
                        className="bg-gray-100 p-2 border rounded w-64"
                    />
                </div>

                {/* Tool Bar */}
                <div className='h-20 w-full bg-amber-300'>
                    {toolbar}
                </div>

                <div className='flex '>
                    {/* Main Content */}
                    <div className="flex-1 p-10 bg-gray-50">
                        {content}
                    </div>
                    {/* Preview Content */}
                    <div className='ml-10'>
                        {preview}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Main
