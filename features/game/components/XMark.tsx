export default function XMark() {
    return <svg viewBox="0 0 100 100" width={80} height={80} role="img">
        <path d="M20 20 L80 80 M80 20 L20 80" className='stroke-green-700'
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
}