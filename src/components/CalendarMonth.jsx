import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import viLocale from "@fullcalendar/core/locales/vi"; // import locale tiếng Việt
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { BsCalendar3, BsCalendar4Range, BsCalendarEvent } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import calendarService from "../service/calendarService";

import ModalInput from "./ModalInput";

const events = [
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
		title: "Summer Music Festival",
		description:
			"Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.",
		allDay: false,
		color: "#00A76F",
		start: "2025-06-29T22:01:14+00:00",
		end: "2025-06-30T01:31:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
		title: "Tech Innovators Conference",
		description:
			"Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.",
		allDay: false,
		color: "#00B8D9",
		start: "2025-07-05T22:01:14+00:00",
		end: "2025-07-06T01:31:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
		title: "Charity Gala Dinner",
		description:
			"Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.",
		allDay: true,
		color: "#FF5630",

		start: "2025-07-09T00:00:00+00:00",
		end: "2025-07-09T23:59:59+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
		title: "Spring Art Exhibition",
		description:
			"Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.",
		allDay: false,
		color: "#8E33FF",
		start: "2025-07-11T23:31:14+00:00",
		end: "2025-07-12T01:31:14+00:00",
	},

	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
		title: "Corporate Training Workshop",
		description:
			"Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.",
		allDay: false,
		color: "#003768",
		start: "2025-07-14T02:46:14+00:00",
		end: "2025-07-14T04:01:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
		title: "Community Health Fair",
		description:
			"Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.",
		allDay: false,
		color: "#FFAB00",
		start: "2025-07-14T04:46:14+00:00",
		end: "2025-07-14T06:01:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
		title: "Startup Pitch Night",
		description:
			"Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.",
		allDay: false,
		color: "#22C55E",
		start: "2025-07-14T06:46:14+00:00",
		end: "2025-07-14T08:01:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9",
		title: "Regional Sports Tournament",
		description:
			"Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.",
		allDay: false,
		color: "#00B8D9",
		start: "2025-07-14T08:46:14+00:00",
		end: "2025-07-14T10:01:14+00:00",
	},
	{
		id: "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10",
		title: "Book Launch Event",
		description:
			"Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui. Quia sequi nulla perspiciatis optio vero omnis maxime omnis ipsum. Perspiciatis consequuntur asperiores veniam dolores.",
		allDay: false,
		color: "#7A0916",
		textColor: "#7A0916",
		backgroundColor: "#7A0916",
		start: "2025-07-18T01:31:14+00:00",
		end: "2025-07-18T02:01:14+00:00",
	},
];

export default function CalendarMonth() {
	const calendarRef = useRef();
	const [currentMonthLabel, setCurrentMonthLabel] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [calendarList, setcalendarList] = useState([]);

	const updateCurrentMonthLabel = () => {
		const calendarApi = calendarRef.current?.getApi();
		if (calendarApi) {
			const date = calendarApi.getDate(); // lấy ngày hiện tại của lịch
			const month = date.getMonth() + 1; // getMonth: 0 -> 11
			const year = date.getFullYear();
			setCurrentMonthLabel(`Tháng ${month} năm ${year}`);
		}
	};

	const handlePrev = () => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.prev();
		updateCurrentMonthLabel();
	};

	const handleNext = () => {
		const calendarApi = calendarRef.current.getApi();
		calendarApi.next();
		updateCurrentMonthLabel();
	};

	function renderEventContent(info) {
		const isAllDay = info.event.allDay;

		return (
			<div className="fc-event-main-frame">
				{!isAllDay && (
					<div className="fc-event-time">{info.timeText}</div>
				)}
				<div className="fc-event-title-container">
					<div className="fc-event-title fc-sticky overflow-ellipsis">
						{info.event.title}
					</div>
				</div>
			</div>
		);
	}

	const getAllCalendar = async () => {
		const data = (await calendarService.getCalendarAll()).data;
		setcalendarList(data);
	};

	useEffect(() => {
		updateCurrentMonthLabel();
		getAllCalendar();
	}, []);

	return (
		<main className="container calendar mx-auto  pt-8 h-full">
			<div className="min-h-[50vh]">
				<div className="flex flex-auto flex-col ">
					<div className="flex justify-between items-center">
						<div
							role="group"
							className="inline-flex items-center p-1 border border-gray-200 gap-1 rounded-sm"
						>
							<button className="min-w-8 min-h-8 inline-flex items-center justify-center hover:bg-gray-200 hover:rounded-full hover:cursor-pointer">
								<BsCalendar3 />
							</button>
							<button className="min-w-8 min-h-8 inline-flex items-center justify-center hover:bg-gray-200 hover:rounded-full hover:cursor-pointer">
								<BsCalendar4Range />
							</button>
							<button className="min-w-8 min-h-8 inline-flex items-center justify-center hover:bg-gray-200 hover:rounded-full hover:cursor-pointer">
								<BsCalendarEvent />
							</button>
						</div>

						<div className="flex items-center justify-center gap-4 ">
							<button
								onClick={handlePrev}
								className="px-1 py-1 cursor-pointer hover:bg-gray-100 hover:rounded-full "
							>
								<BiChevronLeft className="text-2xl" />
							</button>

							<span className="font-semibold text-lg">
								{currentMonthLabel}
							</span>

							<button
								onClick={handleNext}
								className="px-1 py-1 cursor-pointer hover:bg-gray-100 hover:rounded-full "
							>
								<BiChevronRight className="text-2xl " />
							</button>
						</div>

						<button className="bg-orange-600 px-2 py-1 text-white rounded-md text-sm font-bold">
							{" "}
							Today
						</button>
					</div>

					<FullCalendar
						ref={calendarRef}
						locale={viLocale}
						events={events}
						defaultAllDay={true}
						eventDidMount={(info) => {
							info.el.classList.remove("fc-daygrid-dot-event");
							info.el.style.backgroundColor =
								info.backgroundColor;
							info.el.style.borderColor = info.borderColor;

							const el = info.el.querySelector(".fc-event-main");

							if (el) {
								el.style.color = info.backgroundColor;
							}
						}}
						eventClassNames={"fc-daygrid-block-event fc-h-event"}
						eventContent={renderEventContent}
						plugins={[dayGridPlugin]}
						eventDisplay="block"
						eventBackgroundColor="transparent"
						headerToolbar="false"
						themeSystem="bootstrap5"
						height={"auto"}
						dayMaxEventRows={4}
						moreLinkContent={(args) => <>+{args.num} xem thêm</>}
						eventClick={() => setShowModal(true)}
					/>
				</div>
			</div>
			<ModalInput
				isOpen={showModal}
				onClose={() => setShowModal(false)}
			/>
		</main>
	);
}
