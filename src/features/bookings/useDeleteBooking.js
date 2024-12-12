import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings'
import toast from 'react-hot-toast'

export function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    // mutationFn: (id) => defeleteCabin(id),
    mutationFn: deleteBookingApi, //lyhyempi ilmaisu ylemmalle koodiriville
    onSuccess: () => {
      toast.success('Booking succesfully deleted')

      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isDeleting, deleteBooking }
}
