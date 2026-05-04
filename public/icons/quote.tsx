interface QuoteProps {
    color?: string;
    opacity?: number;
}
export default function Quote({color = "#000", opacity = 1}:QuoteProps ) {
    return (
        <svg width="50" height="94" viewBox="0 0 50 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.48 48.96H41.4933C41.0667 73.8667 36.16 77.9733 20.8533 87.04C19.0933 88.1067 18.5067 90.3467 19.5733 92.16C20.64 93.92 22.88 94.5067 24.6933 93.44C42.72 82.7733 49.0133 76.2667 49.0133 45.2267V16.48C49.0133 7.36 41.6 0 32.5333 0H16.5333C7.09333 0 0 7.09333 0 16.48V32.48C0 41.8667 7.09333 48.96 16.48 48.96Z" fill={color} fillOpacity={opacity} />
        </svg>
    )
}
