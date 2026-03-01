export const Maintenance = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center bg-gray-100 text-center'>
            <h1 className='text-4xl font-bold text-gray-800'>
                Site is temporarily unavailable
            </h1>
            <p className='mt-4 text-lg text-gray-600'>
                We are currently performing maintenance. Please check back
                later.
            </p>
        </div>
    );
};
