'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function PopupForm() {
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) throw new Error('API URL is not defined');

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (process.env.NEXT_PUBLIC_DATA_KEY) {
        headers['data_key'] = process.env.NEXT_PUBLIC_DATA_KEY;
      }

      const formData = new FormData(formRef.current!);

      const payload = [
        {
          candidate_name: formData.get('name') || '',
          candidate_number: formData.get('phone') || '',
          alternative_number: '',
          email_id: formData.get('email') || '',
          class_name: formData.get('qualification') || '',
          college_id: 4,
          college_name: 'Tutopia Pro',
          location: formData.get('location') || '',
          postal_code: '',
          query: formData.get('message') || '',
          source: 'Website',
          enquiry_type: '',
          utm_Source: '',
          data_provider: 'DW',
          entry_by: '9998887771',
        },
      ];

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Something went wrong');

      formRef.current?.reset(); // ✅ Reset form
      handleClose(); // ✅ Close dialog
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{ color: 'white', borderColor: 'white', textTransform: 'capitalize' }}
      >
        Enquary
      </Button>

      <Dialog open={open} onClose={handleClose} sx={{ p: 0, backgroundColor: '#000000e8' }}>
        <DialogContent sx={{ p: 0 }}>
          <div className="p-5 rounded bgborder">
            <div className="flex justify-between items-start">
              <h2 className="text-[20px] lg:text-[30px] font-bold mb-3 bg-gradient-to-r from-[#6bffca] to-[#6bffca] [background-clip:text] [-webkit-text-fill-color:transparent]">
                Contact Now
              </h2>
              <IconButton sx={{ color: 'white' }} onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>

            <form onSubmit={handleSubmitForm} ref={formRef}>
              <div className="flex flex-wrap gap-y-3">
                <InputField name="name" label="Full Name" type="text" required />
                <InputField name="email" label="Email address" type="email" required />
                <InputField name="phone" label="Phone No." type="text" required />
                <InputField name="location" label="Location" type="text" required />

                <div className="w-full">
                  <div className="relative z-0 w-full mb-0 group">
                    <select
                      name="qualification"
                      required
                      defaultValue=""
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-[#080808] border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                    >
                      <option value="" disabled>
                        -- Highest qualification --
                      </option>
                      <option value="12th Passout in 2025">12th Passout in 2025</option>
                      <option value="Pursuing Graduation">Pursuing Graduation</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative z-0 w-full mb-5 group">
                    <textarea
                      name="message"
                      id="message"
                      rows={2}
                      className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                </div>

                <div className="w-full">
                  <Button
                    type="submit"
                    sx={{
                      width: '100%',
                      bgcolor: '#ffffff',
                      color: 'inherit',
                      fontSize: '13px',
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

// Reusable input field (for DRY code)
function InputField({
  name,
  label,
  type = 'text',
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <div className="relative z-0 w-full mb-2 group">
        <input
          type={type}
          name={name}
          id={`floating_${name}`}
          required={required}
          className="block py-2.5 px-0 w-full text-sm text-gray-50 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-50 peer"
          placeholder=" "
        />
        <label
          htmlFor={`floating_${name}`}
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-gray-50"
        >
          {label}
        </label>
      </div>
    </div>
  );
}
