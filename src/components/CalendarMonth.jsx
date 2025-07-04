import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Calendar } from "@fullcalendar/core";
import viLocale from "@fullcalendar/core/locales/vi"; // import locale tiếng Việt

const events = [
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
		title: "Summer Music Festival",
		description:
			"Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.",
		allDay: false,
		color: "#00A76F",
		start: "2025-06-22T12:18:57+00:00",
		end: "2025-06-22T15:48:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
		title: "Tech Innovators Conference",
		description:
			"Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.",
		allDay: false,
		color: "#00B8D9",
		start: "2025-06-28T12:18:57+00:00",
		end: "2025-06-28T15:48:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
		title: "Charity Gala Dinner",
		description:
			"Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.",
		allDay: true,
		color: "#FF5630",
		start: "2025-07-01T00:00:00+00:00",
		end: "2025-07-01T23:59:59+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
		title: "Spring Art Exhibition",
		description:
			"Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.",
		allDay: false,
		color: "#8E33FF",
		start: "2025-07-04T13:48:57+00:00",
		end: "2025-07-04T15:48:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
		title: "Corporate Training Workshop",
		description:
			"Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.",
		allDay: false,
		color: "#003768",
		start: "2025-07-06T17:03:57+00:00",
		end: "2025-07-06T18:18:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
		title: "Community Health Fair",
		description:
			"Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.",
		allDay: false,
		color: "#FFAB00",
		start: "2025-07-06T19:03:57+00:00",
		end: "2025-07-06T20:18:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
		title: "Startup Pitch Night",
		description:
			"Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.",
		allDay: true,
		color: "#22C55E",
		textColor: "#22C55E",
		start: "2025-07-06T21:03:57+00:00",
		end: "2025-07-06T22:18:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
		title: "Regional Sports Tournament",
		description:
			"Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.",
		allDay: true,
		color: "#00B8D9",
		start: "2025-07-06T23:03:57+00:00",
		end: "2025-07-07T00:18:57+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
		title: "Book Launch Event",
		description:
			"Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui. Quia sequi nulla perspiciatis optio vero omnis maxime omnis ipsum. Perspiciatis consequuntur asperiores veniam dolores.",
		allDay: false,
		color: "#7A0916",
		start: "2025-07-10T15:48:57+00:00",
		end: "2025-07-10T16:18:57+00:00",
	},
];

export default function CalendarMonth() {
	const renderEventContent = (eventInfo) => {
		return (
			<>
				<div>{eventInfo.timeText}</div>
				<span>{eventInfo.event.title}</span>
			</>
		);
	};
	return (
		<div>
			<h1>Demo App</h1>
			<FullCalendar
				locale={viLocale}
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				events={events}
				defaultAllDay={true}
				eventContent={renderEventContent}
				editable={true}
				selectable={true}
				selectMirror={true}
				dayMaxEvents={true}
				headerToolbar={false}
				droppable={true}
			/>
		</div>
	);
}
