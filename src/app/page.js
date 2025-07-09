import { fetchPublicJobs } from '@/utils/fetchAllJobs';

export default async function JobsPage() {
  const jobs = await fetchPublicJobs(1, 10); // Bạn có thể truyền `searchParams` nếu cần phân trang

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Public Jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs found.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-gray-700">Salary: {job.salary}</p>
              <p className="text-sm text-gray-500">
                Types: {job.job_types.join(', ') || 'N/A'}
              </p>
              <p className="text-sm text-gray-500">
                Specializations: {job.specializations.join(', ') || 'N/A'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
