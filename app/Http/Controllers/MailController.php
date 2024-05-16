<?PHP

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\DemoMail;
use Illuminate\Support\Facades\Mail as FacadesMail;

class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function index()
    {
        $mailData = [
            'title' => 'Mail from ItSolutionStuff.com',
            'body'  => 'This is for testing email using smtp.'
        ];

        FacadesMail::to('fedfg30@gmail.com')->send(new DemoMail($mailData));

        dd("Email is sent successfully.");
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
            'name'    => 'required',
            'email'   => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $mailData = [
            'title' => $request->input('subject'),
            'body'  => $request->input('message'),
            'name'  => $request->input('name'),
            'email' => $request->input('email')
        ];

        FacadesMail::to('fedfg30@gmail.com')->send(new DemoMail($mailData));

        return back()->with('success', 'Email is sent successfully.');
    }
}
