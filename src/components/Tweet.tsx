type TweetProps = {
    text: string;
}
export function Tweet(pros: TweetProps) {
    return (
        <p>{pros.text}</p>
    );
}