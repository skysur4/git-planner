export default function Event({ event }) {
  return (
    <span>
      <strong>
        {event.title}
      </strong>
      { event.desc && (':  ' + event.desc) }
    </span>
  )
}